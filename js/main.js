const variable = {
    header: {
        headerExpand: document.querySelector('.container_menu_expanded'),
        bodyAllCategories: document.querySelector('.container_allCategories'),
        bodyDepartament: document.querySelector('.container_departament'),
        btnHeaderExpand: document.querySelectorAll('.btn_menu'),
        iconBtnMenu: document.querySelector('.fi.fi-br-menu-burger'),
        liCategories: document.querySelectorAll('.li_categories.comun'),
        btnSearch: document.getElementById('btn_search'),
        inputSearch: document.getElementById("input_search"),
        searchResult: document.getElementById("searchResult"),
        searchBody: document.querySelector('.container_searchrResult'),
        searchXIcon: document.querySelector('.fi.fi-rr-cross'),
        liDepartament: document.querySelectorAll(".li_departament"),
        ulDepartament: document.querySelector(".content_ulDepartament"),
        allProducts: document.querySelector(".container_allProducts"),
        allCategories: document.querySelector(".content_allCategories"),

    },
    footer: {
        details: document.querySelectorAll(".details_about"),
        elementsHeading: document.querySelectorAll("summary .elements_heading")
    }
};

// Expandir o menu
function menuExpanded() {
    variable.header.btnHeaderExpand.forEach(button => {
        button.addEventListener('click', () => {
            variable.header.headerExpand.classList.toggle("expanded");
            variable.header.bodyAllCategories.style.display = 'flex';
            variable.header.iconBtnMenu.classList.toggle("fi-br-x");
        });
        if (window.innerWidth >= 768) {
            button.addEventListener('mouseover', () => {
                variable.header.headerExpand.classList.add("expanded");
                variable.header.bodyAllCategories.style.display = 'flex';
                variable.header.bodyDepartament.style.display = 'none';
                button.style.color = "#005CFF";
            });

            variable.header.bodyAllCategories.addEventListener('mouseleave', () => {
                variable.header.headerExpand.classList.remove("expanded");
                variable.header.btnHeaderExpand.forEach(btn => btn.style.color = "");
                variable.header.allCategories.style.display = "none";
            });
        }
    });
}

// Exibir departamentos
function categoryHover() {
    variable.header.liCategories.forEach(li => {
        li.addEventListener('mouseover', () => {
            variable.header.headerExpand.classList.add("expanded");
            variable.header.bodyAllCategories.style.display = 'none';
            variable.header.bodyDepartament.style.display = 'flex';
        });

        variable.header.bodyDepartament.addEventListener('mouseleave', () => {
            variable.header.headerExpand.classList.remove("expanded");
            variable.header.bodyDepartament.style.display = 'none';

        });
    });
}

// Exibir menssagem
function searchMenssage() {
    variable.header.btnSearch.addEventListener("click", () => {
        variable.header.searchBody.classList.add("expanded");
        const value = variable.header.inputSearch.value.trim();
        if (value) {
            variable.header.searchResult.textContent = `Você buscou por: '${value}'`;
        } else {
            variable.header.searchResult.textContent = `Digite no campo de busca`;
        }
    });
    variable.header.searchXIcon.addEventListener("click", () => {
        variable.header.searchBody.classList.remove("expanded");
    });
}

// Mostrar categorias ao clicar no departamento
function departamentExpanded() {
    variable.header.liDepartament.forEach(li => {
        li.addEventListener('click', () => {
            variable.header.allProducts.classList.add("content_ulDepartament_none");
            variable.header.ulDepartament.classList.add("content_ulDepartament_none");
            variable.header.allCategories.style.display = "block";
        });
    });
}

// Alternar o listas no rodapé
function toggleAccordion() {
    variable.footer.details.forEach(detail => {
        if (window.innerWidth >= 768) {
            detail.setAttribute("open", "true");
        } else {
            detail.removeAttribute("open");
        }
    });
}
// Alterar os elementos headers no footer
function toggleHeading() {
    variable.footer.elementsHeading.forEach(e => {
        if (window.innerWidth >= 768) {
            e.innerHTML = '&lt;h4&gt;';
        } else {
            e.innerHTML = '&lt;h5&gt;';
        }
    });
}

window.addEventListener("resize", () => {
    toggleAccordion();
    toggleHeading();
});

menuExpanded();
categoryHover();
searchMenssage();
departamentExpanded();
toggleAccordion();
toggleHeading();


