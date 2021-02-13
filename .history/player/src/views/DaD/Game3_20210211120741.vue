<template>
    <div id="game3">
        <main class="flexbox">
            <Board id="board-1">
                <Card id="card-1" draggable="true">
                    <p>Card one</p>
                </Card>
            </Board>

            <Board id="board-2">
                <Card id="card-2" draggable="true">
                    <p>Card two</p>
                </Card>
            </Board>
        </main>
    </div>
</template>

<script>
import Board from "./Board";
import Card from "./Card";
export default {
    name: 'game3',
    components: {
        Board,
        Card
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: white;
}

.flexbox {
    display: flex;
    justify-content: space-between;

    width: 100%;
    max-width: 768px;
    height: 100vh;

    overflow: hidden;

    margin: 0 auto;
    padding: 15px;
}

.flexbox .board {
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 300px;

    background-color: black;

    padding: 15px;
}

.flexbox .board .card{
    padding: 15px 25px;
    background-color: white;

    cursor: pointer;
    margin-bottom: 15px;
}
</style>