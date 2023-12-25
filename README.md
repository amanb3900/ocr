| About the website |

Application utilizes Optical Character Recognition (OCR) to analyze thai id cards and extract relevant data. This app integrates with Google Vision API for OCR processing and then parse the response to interpret the OCR results, returning the final data in JSON format.

MongoDB is used as the data base to store the extracted information and also to to make changes in the already existing data if needed.

First the user will be provided an option to upload the image, then clicking on Extract Information button the extracted data will be shown in the json format.
Now, the user can also see the history of the extracted data and has the option to update or delete the existing data.

| How to start |

1) npm install  (to install node modules)
2) cd backend
3) node index.js  (to run the backend)

Now Starting the frontend
1) cd frontend
2) npm start

Deployed Link:-
https://ocrfront.onrender.com/

-->Home Page
![image](https://github.com/amanb3900/ocr/assets/107810958/a4d4be15-fc4d-4e04-80c8-926295502612)

-->Update & delete Page
![image](https://github.com/amanb3900/ocr/assets/107810958/ab1eeeb2-7577-4ca8-a2df-efba40574a2b)

-->Output Page
![image](https://github.com/amanb3900/ocr/assets/107810958/8b3cfa22-d55e-48e2-870f-6d5028d8cc11)

