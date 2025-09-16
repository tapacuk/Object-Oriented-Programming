namespace Domain
{
    public interface IJoiner
    {
        void ConstructFurniture();
    }

    public interface IPhotographer
    {
        void TakePhoto();
    }

    public interface IMultiplyBigNumbers
    {
        void MultiplyBigNumber();
    }

    public interface IEntityStringOutput
    {
        public string[] FormatToObj();
        public string FormatToText();
    }
}