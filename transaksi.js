document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formTransaksi");
    const tabelBody = document.querySelector("#tabelTransaksi tbody");
    let no = 1;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nama = document.getElementById("nama").value;
        const buku = document.getElementById("buku").value;
        const tglPinjam = document.getElementById("tglPinjam").value;
        const tglKembali = document.getElementById("tglKembali").value;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${no++}</td>
            <td>${nama}</td>
            <td>${buku}</td>
            <td>${tglPinjam}</td>
            <td>${tglKembali}</td>
        `;

        tabelBody.appendChild(row);
        form.reset();
    });
});
