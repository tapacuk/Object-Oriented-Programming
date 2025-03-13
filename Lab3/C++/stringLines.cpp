#include "stringLines.h"
#include <algorithm>
#include <iostream>

Lines::Lines()
{
    value = "default";
}

Lines::Lines(std::string input) 
{
    value = input;
}

Lines::Lines(const Lines &copied)
{
    value = copied.value;
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
    return value;
}

size_t Lines::stringLength()
{
    return value.length();
}


Lines Lines::operator/(const size_t delimiter) const
{
    std::string newValue = "";
    for (size_t i = 0; i < value.length(); i++)
    {
        if (i % delimiter == 0)
        {
            newValue += value[i];
        }
    }
    return Lines(newValue);
}

Lines Lines::operator+(const Lines &other) const
{
    std::string result = value + other.value;
    return Lines(result);
}

// Lines::~Lines()
// {
//     std::cout << "\033[36m>> destructor called" << std::endl;
// }
