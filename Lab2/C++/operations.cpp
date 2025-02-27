#include "operations.h"
#include <algorithm>
#include <iostream>

Operations::Operations()
{
    text = "";
}

Operations::Operations(std::string input)
{
    text = input;
}

Operations::Operations(const Operations &copied)
{
    text = copied.text;
}

bool Operations::isValidString(std::string input)
{
    for (char c : input)
    {
        if (c < 'a' || c > 'z')
        {
            return false;
        }
    }
    return true;
}

std::string Operations::getText()
{
    return text;
}

size_t Operations::stringLength()
{
    return text.length();
}

std::string Operations::sortAsc()
{
    std::string sortedStr = text;
    std::sort(sortedStr.begin(), sortedStr.end());
    return sortedStr;
}

Operations::~Operations()
{
    std::cout << "\033[36m>> destructor called" << std::endl;
}
