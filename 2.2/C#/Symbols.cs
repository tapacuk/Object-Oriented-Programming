namespace Lab
{
    public class Symbols : Line
    {
        public Symbols(string input) : base(input) { }

        public override int GetLength()
        {
            return value.Length;
        }

        public override void Replace()
        {
            value = value.Replace("#", "!!");
        }

    }
}