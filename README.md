# Environment Variable Setup Instructions

To run this application properly, you need to set up the following environment variables in your `.env` file:

1. `VITE_WEATHER_KEY`: This is the API key required for accessing weather data.

2. `VITE_CITY_SEARCH_KEY`: This is the API key used for city search functionality (https://rapidapi.com/wirefreethought/api/geodb-cities).

3. `VITE_RAPID_HOST`: This is the host URL for a rapid API service.

Here are the steps to set up your `.env` file:

1. Create a new file in the root directory of this project and name it `.env`.

2. Open the `.env` file with a text editor of your choice.

3. Add the required environment variables to the file, one per line, in the format `VARIABLE_NAME=VALUE`.

   For example:


4. Save the `.env` file.

Please ensure you keep your `.env` file private and do not share it or commit it to version control, as it may contain sensitive information. The `.env` file is specific to your local environment and should be used to store sensitive data like API keys and other configurations specific to your setup.
