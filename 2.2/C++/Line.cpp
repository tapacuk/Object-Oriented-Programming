#include "Line.h"

Line::Line() {
    value = "#DEFAULT";
}

Line::Line(const std::string& input) {
    value = input;
}

std::string Line::GetValue() const {
    return value;
}

size_t Line::GetLength() const {
    return value.length();
}

void Line::Replace() {

}
