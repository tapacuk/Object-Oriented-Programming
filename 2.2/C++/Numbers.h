#ifndef NUMBERS_H
#define NUMBERS_H

#include "Line.h"

class Numbers : public Line {
public:
    Numbers(const std::string& input);
    size_t GetLength() const;
    void Replace() override;
};

#endif // NUMBERS_H
