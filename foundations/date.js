// Dates and Times 10/31/2025 - 11/1/2025


let q;

q = new Date();

q = q.toString();

q = new Date(2025, 2, 12, 12,30,0)

q = new Date('2025-10-30')
q = new Date(`07-10-2025`)


q = Date.now();

q = new Date('10-30-2025 4:00:00');
f = q.getTime();

q = new Date(f)



console.log(q);



// Date time Format API


 let m;

 let p = new Date();


 m = p.toString();

 m = p.getTime();


 m = p.getMonth() + 1; // months are zero based so adding a 1 alligns it correctly.


m = p.getDay();

m = Intl.DateTimeFormat('en-US').format(p);  //Also can use toLocaleString

m = p.toLocaleString('default',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/New_York',
});

 console.log(m);
