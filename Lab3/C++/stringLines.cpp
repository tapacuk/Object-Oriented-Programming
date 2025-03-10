#include "stringLines.h"
#include <algorithm>
#include <iostream>

Lines::Lines()
{
    text = "default";
}

Lines::Lines(std::string input)
{
    text = input;
}

Lines::Lines(const Lines &copied)
{
    text = copied.text;
}

bool Lines::isValidString(std::string input)
{
    for (char c : input)
    {
        if (c < 'A' || c > 'Z')
        {
            return false;
        }
    }
    return true;
}

std::string Lines::getText()
{
    return text;
}

size_t Lines::stringLength()
{
    return text.length();
}

Lines Lines::operator+(const Lines& a)
{
    std::string result = (text + other.text);
    return result;
}

Lines::~Lines()
{
    std::cout << "\033[36m>> destructor called" << std::endl;
}
