class ItemDetails {
    constructor(props) {
        const details = document.createElement('div')
        details.classList.add('details')

        const backBtnEl = document.createElement('div')
        backBtnEl.classList.add('details__backButton')
        backBtnEl.innerHTML = '<span>&nbsp&nbspBack&nbsp&nbsp</span>'

        const nameEl = document.createElement('div')
        nameEl.classList.add('details__name')
        nameEl.innerHTML = props.name

        const imageEl = document.createElement('div')
        details.classList.add('details__image')
        const detailsImageEl = document.createElement('img')
        detailsImageEl.src = props.image
        imageEl.append(detailsImageEl)

        const yearEl = document.createElement('div')
        yearEl.classList.add('details__year', 'pills__item')
        yearEl.innerHTML = props.year

        const colorEl = document.createElement('div')
        colorEl.classList.add('details__color', 'pills__item')
        colorEl.innerHTML = this.capitalizeFirstLetter(props.color)

        const makerEl = document.createElement('div')
        makerEl.classList.add('details__maker', 'pills__item')
        makerEl.innerHTML = this.capitalizeFirstLetter(props.maker)

        const collectionEl = document.createElement('div')
        collectionEl.classList.add('details__collection', 'pills__item')
        collectionEl.innerHTML = this.capitalizeFirstLetter(props.collection)

        const styleEl = document.createElement('div')
        styleEl.classList.add('details__style', 'pills__item')
        styleEl.innerHTML = this.capitalizeFirstLetter(props.style)

        const descriptionEl = document.createElement('div')
        descriptionEl.classList.add('details__description')
        descriptionEl.innerHTML = props.description

        const priceEl = document.createElement('div')
        priceEl.classList.add('details__price')
        priceEl.innerHTML = props.price + ' €'

        const pillEl = document.createElement('div')
        pillEl.classList.add('details__pills', 'pills')
        pillEl.append(
            yearEl,
            colorEl,
            makerEl,
            collectionEl,
            styleEl,
        )

        const detailsDescriptionSectionEl = document.createElement('div')
        detailsDescriptionSectionEl.classList.add('details__descriptionSection')

        detailsDescriptionSectionEl.append(
            nameEl,
            pillEl,
            descriptionEl,
            priceEl
        )

        details.append(
            backBtnEl,
            imageEl,
            detailsDescriptionSectionEl
        )

        return details
    }

    capitalizeFirstLetter(str) {
        return str.substring(0, 1).toUpperCase() + str.substring(1)
    }
}