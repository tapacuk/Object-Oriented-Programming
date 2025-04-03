#include "operations.h"
#include <algorithm>

Operations::Operations(std::string input) {
    text = input;
}

bool Operations::isValidString(std::string input) {
    for (char c : input) {
        if (c < 'a' || c > 'z') {
            return false;
        }
    }
    return true;
}

std::string Operations::getText() {
    return text;
}

int Operations::stringLength() {
    return text.length();
}

std::string Operations::sortAsc() {
    std::string sortedStr = text;
    std::sort(sortedStr.begin(), sortedStr.end());
    return sortedStr;
}
