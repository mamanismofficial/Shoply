document.addEventListener('DOMContentLoaded', () => {
    // Inisialisasi keranjang
    let cartCount = 2; // Sesuai desain awal
    const cartBadge = document.getElementById('cart-badge');
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    // Fungsi tambah item ke keranjang
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Mencegah pindah halaman
            
            // Update angka
            cartCount++;
            cartBadge.textContent = cartCount;
            
            // Hapus class animasi jika sudah ada
            cartBadge.classList.remove('pop-animation');
            
            // Tambahkan ulang dengan setTimeout agar animasi terpicu kembali
            setTimeout(() => {
                cartBadge.classList.add('pop-animation');
            }, 10);
        });
    });
});