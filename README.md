Link Shortner Api (Try in POSTMAN or any other)                                    
  
Base Links:
                        
https://shorte-links.herokuapp.com/shorten    (Hosted Link)                        
localhost:4000/shorten                        (Local Host)                      


Method:    POST                                      

Body(json) (put link to be shortened in place of URL):           
                                                   
 {                 
	"longUrl":"URL"                                          
 }                                                                                   
 Response (use shortedurl (recieved in shortUrl in respnse ) in browser):                                                                                          

 {          
    "_id": "5ebab83d2929180004dc7a0b",      
    "longUrl": "URL",       
    "shortUrl": "shortedurl",       
    "urlCode": "c5STyj2la",         
    "date": "Tue May 12 2020 14:52:45 GMT+0000 (Coordinated Universal Time)",      
    "__v": 0                        
}                        
                  


Dependencies:                   

"body-parser": "^1.19.0",                      
    "express": "^4.17.1",                      
    "mongoose": "^5.9.13",                     
    "shortid": "^2.2.15",                              
    "valid-url": "^1.0.9",                     
    "nodemon": "^2.0.3"                                                            


