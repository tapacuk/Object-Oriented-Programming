#ifndef OPERATIONS_H
#define OPERATIONS_H

#include <string>
class Operations
{
private:
    std::string text;

public:
    Operations();
    Operations(std::string input);
    Operations(const Operations &copied);

    std::string getText();
    static bool isValidString(std::string input);
    size_t stringLength();
    std::string sortAsc();

    ~Operations();
};

#endif