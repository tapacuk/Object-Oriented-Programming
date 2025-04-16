#include "Numbers.h"

Numbers::Numbers(const std::string& input) : Line(input) {}

size_t Numbers::GetLength() const {
    return value.length();
}

void Numbers::Replace() {
    size_t pos = 0;
    while ((pos = value.find("3", pos)) != std::string::npos) {
        value.replace(pos, 1, "11");
        pos += 2;
    }
}
