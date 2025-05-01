#include "LineContainer.h"

void LineContainer::ClearText() {
    lines.clear();
}

void LineContainer::AddLine(const std::string& text) {
    lines.push_back(Line(text));
}

void LineContainer::RemoveLine(const std::string& text) {
    for (size_t i = 0; i < lines.size(); ++i) {
        if (lines[i].value == text) {
            lines.erase(lines.begin() + i);
            break;
        }
    }
}

std::string LineContainer::GetShortestLine() const {
    if (lines.empty()) {
        return "";
    }

    const Line* shortest = &lines[0];

    for (const auto& line : lines) {
        if (line.Length() < shortest->Length()) {
            shortest = &line;
        }
    }

    return shortest->value;
}

std::string LineContainer::BuildFirstChars() const {
    std::string result;

    for (const auto& line : lines) {
        char ch = line.GetFirstChar();
        if (ch != '\0') {
            result += ch;
        }
    }

    return result;
}

double LineContainer::CharFrequency(char c) const {
    int totalLength = 0;
    int charCount = 0;

    for (const auto& line : lines) {
        totalLength += line.Length();
        charCount += line.CountChars(c);
    }
    
    if (totalLength == 0) {
        return 0;
    }

    return (double)charCount / totalLength;
}

std::string LineContainer::ShowAllLines() const {
    std::string result;

    for (const auto& line : lines) {
        result += line.value + " ";
    }

    return result;
}