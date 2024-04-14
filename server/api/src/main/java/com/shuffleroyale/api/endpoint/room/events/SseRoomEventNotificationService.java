package com.shuffleroyale.api.endpoint.room.events;

import com.shuffleroyale.room.RoomEvent;
import com.shuffleroyale.room.RoomEventNotificationService;
import com.shuffleroyale.room.RoomId;
import lombok.AccessLevel;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.TransactionSynchronization;
import org.springframework.transaction.support.TransactionSynchronizationManager;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@Service
@RequiredArgsConstructor(access = AccessLevel.PACKAGE)
class SseRoomEventNotificationService implements RoomEventNotificationService {

    @NonNull
    private final RoomEventMapper mapper;

    @NonNull
    private final Map<RoomId, List<SseEmitter>> emitters;

    @Autowired
    public SseRoomEventNotificationService(RoomEventMapper mapper) {
        this(mapper, new ConcurrentHashMap<>());
    }

    @Transactional(propagation = Propagation.SUPPORTS)
    @Override
    public void notify(RoomId roomId, RoomEvent event) {
        if (TransactionSynchronizationManager.isActualTransactionActive()) {
            TransactionSynchronizationManager.registerSynchronization(new TransactionSynchronization() {
                @Override
                public void afterCommit() {
                    sendMessage(roomId, event);
                }
            });
        } else {
            sendMessage(roomId, event);
        }
    }

    private void sendMessage(RoomId roomId, RoomEvent event) {
        for (var emitter : emitters.getOrDefault(roomId, List.of())) {
            try {
                emitter.send(mapper.map(event), MediaType.APPLICATION_JSON);
            } catch (Exception e) {
                log.debug("Failed to notify subscriber {} of event {}", emitter, event, e);
            }
        }
    }

    SseEmitter subscribe(RoomId roomId) {
        var emitter = new SseEmitter();
        emitters.computeIfAbsent(roomId, id -> new ArrayList<>())
                .add(emitter);
        emitter.onTimeout(() -> removeEmitter(roomId, emitter));
        log.info("Added new subscriber {} to room: {}", emitter, roomId);
        return emitter;
    }

    void removeEmitter(RoomId roomId, SseEmitter emitter) {
        log.info("Removed subscriber {} from room {}", emitter, roomId);
        emitters.getOrDefault(roomId, List.of())
                .remove(emitter);
    }

}
