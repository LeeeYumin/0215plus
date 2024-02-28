const boardList =
`SELECT no,
        title,
        writer,
        content,
        created_date,
        updated_date
FROM t_board_board
ORDER BY no`;

const boardInfo  =
`SELECT no,
        title,
        writer,
        content,
        created_date,
        updated_date
FROM t_board_board
WHERE no = ?`;

const boardInsert =
`INSERT INTO t_board_board
SET ? `;

const boardUpdate =
`UPDATE t_board_board
SET ?
WHERE no = ? `;


module.exports = {
    boardList,
    boardInfo,
    boardInsert,
    boardUpdate
}