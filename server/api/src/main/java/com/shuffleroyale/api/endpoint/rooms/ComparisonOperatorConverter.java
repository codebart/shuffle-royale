package com.shuffleroyale.api.endpoint.rooms;

import com.shuffleroyale.room.Filter;
import lombok.NonNull;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
class ComparisonOperatorConverter implements Converter<String, Filter.ComparisonOperator> {

    @Override
    public Filter.ComparisonOperator convert(@NonNull String source) {
        return switch (source) {
            case "<" -> Filter.ComparisonOperator.LOWER;
            case ">" -> Filter.ComparisonOperator.GREATER;
            case "=" -> Filter.ComparisonOperator.EQUAL;
            default -> throw new IllegalArgumentException("Invalid operator: " + source);
        };
    }

}
