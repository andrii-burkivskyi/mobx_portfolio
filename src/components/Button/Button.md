## Button

# scss theme base 

```
@import "../../../assets/index";

@include element("button_container", theme) {
    @include mod("is_disabled") {
        cursor: not-allowed;
    }
}

@include element("button", theme) {
    display: flex;
    align-items: center;
    justify-content: center;

    @include mod(is_disabled) {
        opacity: 0.5;
        pointer-events: none;
    }
}

@include element("text_container", theme) {
    display: flex;
    align-items: center;
    justify-content: center;
}

@include element("text", theme) {
}

@include element("counter", theme) {
}

@include element("icon", theme) {
}
```