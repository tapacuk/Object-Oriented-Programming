#pragma once

#include <string>

class ICharFormater {
public:
    virtual std::string BuildFirstChars() const = 0;
    virtual ~ICharFormater() = default;
};


