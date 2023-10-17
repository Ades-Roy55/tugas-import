import { panggilan } from "./tugas1.js";
const tamp = (p) =>{
    p.nama.forEach((value, index) => {
        console.log(`Nama : ${value}`);
        console.log(`NIM : ${p.nim[index]}\n`);
        
    });
}

tamp(panggilan);