package com.shuffleroyale.api.endpoint.rooms;

import lombok.NonNull;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import java.util.regex.Pattern;

@Component
class BlindsConverter implements Converter<String, BlindsParam> {

    private static final Pattern BLINDS_PATTERN = Pattern.compile("(?<small>\\d+)/(?<big>\\d+)");

    @Override
    public BlindsParam convert(@NonNull String source) {
        var matcher = BLINDS_PATTERN.matcher(source);
        if (!matcher.matches()) {
            throw new IllegalArgumentException("Invalid input for blinds: " + source);
        }
        return new BlindsParam(
                Long.parseLong(matcher.group("small")),
                Long.parseLong(matcher.group("big"))
        );
    }

}
