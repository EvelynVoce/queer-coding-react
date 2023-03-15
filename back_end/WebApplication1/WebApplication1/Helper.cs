namespace WebApplication1;

using System;
using System.Configuration;
public static class Helper
{
    public static String CnnVal(string name)
    {
        return ConfigurationManager.ConnectionStrings[name].ConnectionString;
    }
}
