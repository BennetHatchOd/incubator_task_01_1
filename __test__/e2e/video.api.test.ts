import request from "supertest";
import {HTTP_STATUSES, SETTING} from '../../src/setting';
import {app} from '../../src/app'


describe('/video', () => {

    beforeAll(async() =>{  // clear db-array
        await request(app).delete(SETTING.PATH.TEST_CLEAR_DB);

    })

    it('should return 200 and empty array', async () => { // watch all db [get.video]
        await request(app)
                .get('/videos')
                .expect(HTTP_STATUSES.OK_200, []);    
    })

    it('should return 404 and {video-4}', async () => {// watch non exist item of db [get.video/hj]
        const res = await request(app)
                .get('/videos/mjjhjn')
                .expect(HTTP_STATUSES.NOT_FOUND_404);    
        
    })

    let createdVideo: any = null;

    it('should return 201 and created object', async () => { // create new item [post/video]
        let createdResponse = await 
                request(app)
                .post('/videos')
                .send({
                    title: "The first",
                    author: "Copolla",
                     "availableResolutions": [  "P144" ]
                })
                .expect(HTTP_STATUSES.CREATED_201);
        createdVideo = createdResponse.body;
    
        expect(createdVideo).toEqual({
            id: expect.any(Number),
            title: "The first",
            author: "Copolla",
            "availableResolutions": ["P144"],
            canBeDownloaded: false,
            minAgeRestriction: null,
            publicationDate: expect.any(String),
            createdAt:	expect.any(String)
        })
                
    })

    let createdVideo2: any = null;


    it('should return 201 and created object', async () => { // create new item [post/video]
        let createdResponse2 = await 
                request(app)
                .post('/videos')
                .send({
                    title: "The second",
                    author: "Tarantino",
                    "availableResolutions": ["P144", "P480", "P720"]
                })
                .expect(HTTP_STATUSES.CREATED_201);
        createdVideo2 = createdResponse2.body;
    
        expect(createdVideo2).toEqual({
            id: expect.any(Number),
            title: "The second",
            author: "Tarantino",
            "availableResolutions": ["P144", "P480", "P720"],
            canBeDownloaded: false,
            minAgeRestriction: null,
            publicationDate: expect.any(String),
            createdAt:	expect.any(String)
        })
    })

    it('should return 400 ', async () => { // create new item [post/video]
        let createdResponse2 = await 
                request(app)
                .post('/videos')
                .send({
                    title: "The third",
                    author: "Tarantino123456789123456789123456789123456789",
                    "availableResolutions": ["P144", "P480", "P720"]
                })
                .expect(HTTP_STATUSES.BAD_REQUEST_400,
                    {errorsMessages:[{
                        message: "Author length isn't allowed",
                        field: "author"
                        }]
                    });
                
    })
    it('should return 400 ', async () => { // create new item [post/video]
        await 
                request(app)
                .post('/videos')
                .send({
                    author: "Tarantino9",
                    "availableResolutions": ["P144", "P480", "P720"]
                })
                .expect(HTTP_STATUSES.BAD_REQUEST_400,
                    {errorsMessages:[{
                        message: "Author length isn't allowed",
                        field: "author"
                        }]
                    });
                
    })

    it('should return 200 and array of object', async () => { // watch all db [get.video]
        await request(app)
                .get('/videos')
                .expect(HTTP_STATUSES.OK_200, [createdVideo, createdVideo2]);    
        })
})