#include "Symbols.h"

Symbols::Symbols(const std::string& input) : Line(input) {}

size_t Symbols::GetLength() const {
    return value.length();
}

void Symbols::Replace() {
    size_t pos = 0;
    while ((pos = value.find("#", pos)) != std::string::npos) {
        value.replace(pos, 1, "!!");
        pos += 2;
    }
}
