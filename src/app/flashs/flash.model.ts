export interface Flash {
    id: number,
    question: string,
    answer: string,
    result: boolean | null,
    show: boolean,
}
export class Flash implements Flash {
    constructor(public id: number, public question: string, public answer: string, result: boolean | null = null) {
        this.result = result
        this.show = false
    }
}
export var data = [
    {
        "id": 5892,
        "question": "Question 1",
        "answer": "Answer 1",
        "result": null
    },
    {
        "id": 3729,
        "question": "Question 2",
        "answer": "Answer 2",
        "result": null
    },
    {
        "id": 2096,
        "question": "Question 3",
        "answer": "Answer 3",
        "result": null
    },
    {
        "id": 1913,
        "question": "Question 4",
        "answer": "Answer 4",
        "result": null
    },
    {
        "id": 2289,
        "question": "Question 5",
        "answer": "Answer 5",
        "result": null
    }
]
