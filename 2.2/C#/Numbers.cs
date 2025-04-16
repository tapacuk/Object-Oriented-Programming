namespace Lab
{
    public class Numbers : Line
    {
        public Numbers(string input) : base(input) { }

        public override int GetLength()
        {
            return value.Length;
        }

        public override void Replace()
        {
            value = value.Replace("3", "11");
        }
    }
}