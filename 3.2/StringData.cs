using System;

namespace CollectionsLab
{
    public class StringData : IComparable<StringData>
    {
        public string Value { get; set; }
        public int Length => Value.Length;
        public int Key { get; set; }
        public bool DirectionUp { get; set; }

        public StringData(string value, int key, bool directionUp)
        {
            Value = value;
            Key = key;
            DirectionUp = directionUp;
        }

        public string Encrypt()
        {
            return new string([.. Value.Select(c => (char)(c + (DirectionUp ? Key : -Key)))]);
        }

        public string Decrypt()
        {
            return new string([.. Value.Select(c => (char)(c - (DirectionUp ? Key : -Key)))]);
        }

        public override string ToString()
        {
            return $"\"{Value}\" (length: {Length}, key: {Key}, {(DirectionUp ? "+" : "-")})";
        }

        public int CompareTo(StringData other)
        {
            if (other == null) return 1;
            return string.Compare(Value, other.Value, StringComparison.Ordinal);
        }
    }

}