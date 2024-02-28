require("dotenv").config({ path: "./db/db.env" });
const express = require("express");
const app = express();

app.use(
  express.json({
    limit: "50mb",
  })
);

const server = app.listen(4000, () => {
  console.log("Server started. port 4000.");
});

const db = require("./db.js"); //db에 대한 값을 불러올 수 있도록 추가
// REST API 기준

//전체조회
app.get("/boards", async (request, response) => {
  let result = await db.connection('boardList'); //sql.js 모듈
  response.send(result); //send 많이 씀
});

//단건조회
app.get("/boards/:bno", async (request, response) => {
  let data = request.params.bno;
  let result = (await db.connection('boardInfo', data))[0]; // 1건이라서 [0] 붙일것
  response.send(result);
});


//등록 : post => body
app.post("/boards", async (request, response)=>{
  let data = request.body.param; // body가 객체타입임. { param : { .. } }
  let result = await db.connection('boardInsert', data);
  response.send(result);
});

//수정 : put => body
app.put("/boards/:bno", async (request, response) => {
  let data = [request.body.param, request.params.bno];
            //[객체, 단일값(기본키. 경로에 붙어옴)];
  let result = await db.connection('boardUpdate', data);
  response.send(result);
});

