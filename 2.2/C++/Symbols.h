#ifndef SYMBOLS_H
#define SYMBOLS_H

#include "Line.h"

class Symbols : public Line {
public:
    Symbols(const std::string& input);
    size_t GetLength() const;
    void Replace() override;
};

#endif // SYMBOLS_H
