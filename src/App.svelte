<script lang="ts">
    import {AiResponse} from "./lib/aiResponse.svelte";
    let userInput:string = $state("")

    const colors = {
        Great: "#4caf50",
        Bad: "#f44336",
        Good: "#ffeb3b"
    }

    const aiResponse = new AiResponse();

    async function handleAddJournal(){
       if(userInput.trim()){
           aiResponse.journalText=userInput;
           await aiResponse.addJournal()

           userInput = ""
       }
    }

    function handleDelete(index:number){
        aiResponse.deleteJournal(index)
    }

    //$inspect(userInput)


</script>

<div class="post-container">
    <input type="text" placeholder="summarize how your day went" bind:value={userInput}>
    <button onclick={handleAddJournal}>{aiResponse.loading? "loading" : "Add Journal"}</button>
</div>

<section>
    {#each aiResponse.data as journal,index}
        {#if journal.message}

            <div class="journal"
                 role="button"
                 tabindex="0"
                 ondblclick={()=>handleDelete(index)}
                 onkeydown={(e)=>{if(e.key==="Enter") handleDelete(index)}}
            >
                <h4 class="title">{journal.message.title}</h4>
                <p class="sentiment"
                    style:--sentimentColor={colors[journal.message.sentiment]}
                >
                    sentiment: {journal.message.sentiment}
                </p>
                <div class="tag-container">
                    {#each journal.message.tags as tag}
                        <p class="tag">{tag}</p>
                    {/each}
                </div>

            </div>
        {/if}
    {/each}

</section>

<style>
   :root {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
}

.post-container {
    display: flex;
    justify-content: center;
    gap: 5px;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    position: fixed;
    width: 93vw;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px 10px;
    z-index: 99;
}

input[type="text"] {
    width: 100%;
    max-width: 400px;
    padding: 12px;
    margin: 10px 0;
    border: 2px solid #00796b;
    border-radius: 8px;
    box-sizing: border-box;
    font-size: 1rem;
    background-color: #ffffff;
}

button {
    padding: 12px 24px;
    margin: 10px 0;
    border: none;
    border-radius: 8px;
    background-color: #00796b;
    color: #ffffff;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #004d40;
}

section {
    display: flex;
    gap: 5px;
    padding: 10px 20px;
    flex-wrap: wrap;
    margin-top: 100px;
    justify-content: center;
}

.journal {
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 300px;
    padding: 20px;
    margin: 20px 0;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    transition: transform 0.2s;
    cursor: pointer;
}

.journal:hover {
    transform: translateY(-5px);
}

.journal .title {
    font-weight: bold;
    font-size: 1.5rem;
    margin: 0 0 10px;
    color: #333;
}

.journal .sentiment {
    font-size: 1rem;
    color: black;
    margin: 0 0 10px;
    width: fit-content;
    padding: 10px;
    border-radius: 10px;
    background: var(--sentimentColor, #f0f0f0);
}

.journal .tag-container {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}

.journal .tag {
    place-items: start;
    padding: 5px 10px;
    background-color: black;
    border-radius: 5px;
    font-size: 0.9rem;
    color: white;
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
    .post-container {
        flex-direction: column;
        align-items: center;
        padding: 10px;
    }

    input[type="text"] {
        max-width: 100%;
    }

    button {
        width: 100%;
        max-width: 200px;
    }

    section {
        padding: 20px;
        margin-top: 120px;
    }

    .journal {
        width: 100%;
        max-width: 100%;
    }
}

@media (max-width: 480px) {
    .post-container {
        padding: 5px;
    }

    input[type="text"] {
        padding: 8px;
    }

    button {
        padding: 8px 16px;
    }

    .journal .title {
        font-size: 1.2rem;
    }

    .journal .sentiment {
        font-size: 0.9rem;
        padding: 8px;
    }

    .journal .tag {
        font-size: 0.8rem;
        padding: 4px 8px;
    }
}

</style>

