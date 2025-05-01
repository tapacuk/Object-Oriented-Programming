#pragma once

#include <string>

class Line {
public:
    std::string value;

    Line(const std::string& text);
    
    char GetFirstChar() const;
    int CountChars(char c) const;
    int Length() const;
};

