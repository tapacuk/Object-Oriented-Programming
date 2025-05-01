#include "Line.h"
#include <algorithm>

Line::Line(const std::string& text) : value(text) {}

char Line::GetFirstChar() const {
    return value.empty() ? '\0' : value[0];
}

int Line::CountChars(char c) const {
    int count = 0;
    for (char ch : value) {
        if (ch == c) {
            ++count;
        }
    }
    return count;
}

int Line::Length() const {
    return value.size();
}
