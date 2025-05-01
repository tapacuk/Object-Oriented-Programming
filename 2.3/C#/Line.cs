namespace Lab
{
    public interface ICharFormater
    {
        string BuildFirstChars();
    }

    public class Line
    {
        public string value { get; set; }

        public Line(string text)
        {
            value = text;
        }

        public char GetFirstChar()
        {
             if (string.IsNullOrEmpty(value))
            {
                return '\0'; // nullchar
            }
            
            return value[0];
        }

        public int CountChars(char c)
        {
            return value.Count(ch => ch == c);
        }

        public int Length()
        {
            return value.Length;
        }
    }

    public class LineContainer : ICharFormater
    {
        private List<Line> lines = new List<Line>();

        public void ClearText()
        {
            lines.Clear();
        }

        public void AddLine(string text)
        {
            lines.Add(new Line(text));
        }

        public void RemoveLine(string text)
        {
            var str = lines.FirstOrDefault(l => l.value == text);
            if (str != null)
            {
                lines.Remove(str);
            }
        }

        public string GetShortestLine()
        {
            return lines.OrderBy(line => line.Length()).FirstOrDefault().value; // сортує по довжині за зростанням і повертає перший рядок або порожній рядок, якщо список порожній
        }

        public string BuildFirstChars()
        {
            string result = "";
            foreach (var line in lines)
            {
                var firstChar = line.GetFirstChar();
                if (firstChar != '\0')
                {
                    result += firstChar;
                }
            }

            return result;
        }

        public double CharFrequency(char c)
        {
            int totalLength = lines.Sum(l => l.Length());
            int count = lines.Sum(l => l.CountChars(c));

            if (totalLength == 0)
            {
                return 0;
            }

            return (double)count / totalLength;
        }
        public string ShowAllLines()
        {
            string result = "";

            foreach (var line in lines)
            {
                result += line.value + " ";
            }

            return result;
        }
    }
}