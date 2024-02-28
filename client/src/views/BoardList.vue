<template>
    <div class="container">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일자</th>
                </tr>
            </thead>
            <tbody>
                <tr  :key="i" v-for="(board, i) in boardList"
                            @click="goToDetail(board.no)">
                    <td>{{ board.no }}</td>
                    <td>{{ board.title }}</td>
                    <td>{{ board.writer }}</td>
                    <td>{{ getDateFormat(board.created_date) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return {
            boardList : []
        };
    },
    created(){
        this.getBoardList();
    },
    methods : {
        async getBoardList(){
            let result = await axios.get('/api/boards')
                                   .catch(err => console.log(err));

            this.boardList = result.data;
        },
        getDateFormat(date){
            let dateValue = new Date(date);
            let year = dateValue.getFullYear();
            let month = ('0' + (dateValue.getMonth() + 1)).slice(-2);
            let day = ('0' + dateValue.getDate()).slice(-2);
            return `${year}-${month}-${day}`;
        },
        goToDetail(bno){
            this.$router.push({ path : '/boardInfo', query : {'boardNo' : bno}});
        }
    }
}
</script>
<style scoped>
    table *{
        text-align: center;
    }
</style>
