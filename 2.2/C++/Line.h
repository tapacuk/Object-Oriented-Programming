#ifndef LINE_H
#define LINE_H

#include <string>
#include <algorithm>

class Line {
protected:
    std::string value;

public:
    Line();
    Line(const std::string& input);
    virtual std::string GetValue() const;
    virtual size_t GetLength() const;
    virtual void Replace();
    virtual ~Line() = default;
};

#endif // LINE_H
