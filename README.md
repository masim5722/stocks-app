# Stocks-app
![image](https://user-images.githubusercontent.com/19261500/138868744-760893d8-8c6c-462e-8100-0cc9e11da5a0.png)

This is an application created for an Assessment Task. 
Following sub tasks are completed in this
1. Created Django Application for Stocks
2. Created model as per requirements
3. Created a Django script to read csv files and insert in to the database
4. Created Endpoint with Filters and Sorting functionality which is used in Frontend
5. Created Frontend Application in ReactJs
6. Created Stocks component, call the apis
7. Implemented functionality to fetch data by filters
8. Implmented functionality to sort the data
9. Implemented Custom Pagination as the data was big to handle for the chart
10. Integrated Apex Charts
11. Dockerize, both Frontend and Backend app for deployment

# Project Directory Structure
	├───frontend #ReactJs application
		├───src
		    ├───components # components folder
		    │   ├───layout #layout component
		    │   ├───loader #loader component to show loading icon
		    │   └───stocks # stocks component to fetch and show data on chart
		    ├───redux
		    │   ├───actions # redux action's folder that contains action to dispatch action to update value for loading icon
		    │   └───reducers # redux reducer folder that contains reducer's to update loading icon state 
		    ├───routes # this folder contains route file, react-router is used
		    └───services # services folder contains api calls
	├───backend
		    ├───api # django core application folder
		    ├───data # data folder contains sample csv data
		    ├───scripts # scripts folder contains load script to insert the sample data in to the database
		    └───stocks # django application for API of stocks
    ├───nginx # nginx configrations folder for docker
    

# Pre-requisites for local setup
1.  Python >= 3.9
2.  Django >= 3.2
3.  ReactJs > 17.0
4.  node >= 14 (npm comes with node)

#  How to setup Stocks on your local machine
**Note:** Please install the pre-requisites first
1.	Take a clone from main branch, **stocks-app** folder would be created. Open CMD or terminal
2.	Now goto **frontend** folder and run command **`npm install`**
3.	Now goto **backend** folder and setup and create virtual environment for this app

	    pip install pipenv
	    #if the above command does not work run this command
	    pip install --user pipenv
	    
	    # making migrations
	    pipenv run python manage.py makemigrations
	    
	    #run migrations
	    pipenv run python manage.py migrate
	    
	    # run this command to insert sample data
	    pipenv run python manage.py runscript load
	    
	    # now run this command to run server
	    pipenv run python manage.py runserver
	  
	  open this URL in your broswer to access the backend API view
	  http://127.0.0.1:8000/api/stocks/
	    
4. The backend server is now running successfully. Now you need to run the react app
5.	Goto to **frontend** folder and run this command `npm run start`
6.	ReactJs App will start running and you can access it from this URL http://localhost:3000

