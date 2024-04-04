package com.shuffleroyale.room;

import java.util.function.Function;

public sealed interface Filter<T> {

    default <S> Filter<S> map(Function<T, S> mappingFunction) {
        return switch (this) {
            case Any<T> ignored -> any();
            case Value(ComparisonOperator operator, T value) -> new Value<>(operator, mappingFunction.apply(value));
        };
    }

    default Filter<T> withOperator(ComparisonOperator newOperator) {
        return switch (this) {
            case Any<T> ignored -> any();
            case Value(ComparisonOperator ignored, T value) -> new Value<>(newOperator, value);
        };
    }

    @SuppressWarnings("unchecked")
    static <T> Filter<T> any() {
        return (Filter<T>) Any.INSTANCE;
    }

    record Value<T>(ComparisonOperator operator, T value) implements Filter<T> {
    }

    record Any<T>() implements Filter<T> {
        private static final Filter<?> INSTANCE = new Any<>();
    }

    enum ComparisonOperator {
        GREATER,
        LOWER,
        EQUAL
    }

}
