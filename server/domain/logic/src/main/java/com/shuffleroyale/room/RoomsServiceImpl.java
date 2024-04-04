package com.shuffleroyale.room;

import lombok.AccessLevel;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(access = AccessLevel.PACKAGE)
class RoomsServiceImpl implements RoomsService {

    @NonNull
    private final RoomsRepository roomsRepository;

    @Override
    public RoomList roomList(RoomCriteria roomCriteria) {
        return roomsRepository.roomList(roomCriteria);
    }

}
