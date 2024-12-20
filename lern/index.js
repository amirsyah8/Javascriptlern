function Mahasiswa(nama, lulus, email, ipSemester) {
    this.nama = nama;
    this.lulus = lulus;
    this.email = email;
    this.ipSemester = ipSemester;

    // Tambahkan metode ipKumulatif
    this.ipKumulatif = function() {
        return this.ipSemester.reduce((total, nilai) => total + nilai, 0) / this.ipSemester.length;
    };
}





