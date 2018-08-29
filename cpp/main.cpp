#include <iostream>
#include <vector>
#include <string>
#include <fstream>

using namespace std;

int main(int argc, char const *argv[])
{
	cout << "hello world"<< endl;
	const double PI = 3.1415926535;
	char myGrade = 'A';

	bool isHappy = true;

	int myAge = 39;

	double otherFavNum = 1.646785;

	cout<< "favrite Number " << otherFavNum << endl;

	cout << "Size of int " << sizeof(myAge) <<" bytes " << endl;

	// arrays
	int myfavNums[5];

	int badNumbers[5] = {4, 13, 14, 85};

	cout << "Bad Number 1 is :" << badNumbers[0] << endl;
	
	return 0;
}