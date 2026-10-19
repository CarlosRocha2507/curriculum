async function printCV() {
    // Keep all document styles, including linked CSS and print rules.
    await document.fonts.ready;
    await Promise.all(Array.from(document.images, image =>
        image.decode().catch(() => {})
    ));
    window.print();
}