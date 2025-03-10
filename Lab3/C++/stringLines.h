#ifndef STRINGLINES_H
#define STRINGLINES_H

#include <string>
class Lines
{
private:
    std::string text;

public:
    Lines();
    Lines(std::string input);
    // Lines(const Lines &copied);

    std::string getText();
    static bool isValidString(std::string input);
    size_t stringLength();

    Lines operator+(const Lines& a);
    ~Lines();
};

#endif