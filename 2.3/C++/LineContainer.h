#pragma once

#include "Line.h"
#include "ICharFormater.h"
#include <vector>
#include <string>

class LineContainer : public ICharFormater {
private:
    std::vector<Line> lines;

public:
    void ClearText();
    void AddLine(const std::string& text);
    void RemoveLine(const std::string& text);
    std::string GetShortestLine() const;
    std::string BuildFirstChars() const override;
    double CharFrequency(char c) const;
    std::string ShowAllLines() const;
};

