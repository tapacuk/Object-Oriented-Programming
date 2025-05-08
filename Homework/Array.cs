using System;

class Array
{
    int[,] arr;
    private long prod;

    public Array(int[,] input)
    {
        arr = input;
        prod = CalculateProduct();
    }

    public double this[int row]
    {
        get
        {
            double sum = 0;
            int cols = arr.GetLength(1);

            for (int i = 0; i < cols; i++)
            {
                sum += arr[row, i];
            }

            return sum / cols;
        }
    }

    public long Product
    {
        get { return prod; }
    }

    private long CalculateProduct()
    {
        long result = 1;
        for (int i = 0; i < arr.GetLength(0); i++)
        {
            for (int j = 0; j < arr.GetLength(1); j++)
            {
                result *= arr[i, j];
            }
        }
        return result;
    }
}