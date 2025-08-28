<?php include __DIR__ . '/include/header.php'; ?>
<div class="wrapper">
    <div class="header_article">
        <h2>Задание 2</h2>
    </div>
    <div class="wrap_table_and_select">
        <div class="select" id="select_title">
            <div class="wrapper_select_title">
                <input value="Выберете товар" type="button" class="cast_input">
                <div class="wrapper_img"><img src="/img/down_arrow.png"></div>
            </div>
            <div class="items_select_wrapper">
            </div>
        </div>
        <table>
            <tr>
                <th>Название продукта</th>
                <th>Характеристика</th>
                <th>Значение</th>
                <th>Архив</th>
            </tr>
            <tr>
                <td id="name">Нет</td>
                <td id="characteristic">Нет</td>
                <td id="value">Нет</td>
                <td id="archive">Нет</td>
            </tr>
        </table>
    </div>
</div>

<div class="wrapper part">
    <div class="header_article">
        <h2>Задание 3</h2>
    </div>
    <div class="wrap_table_and_select">
        <div class="wrapCheckBox">
            <fieldset>
                <legend>Выберете что хотите получить: </legend>
                <div class="body_selected_items"> </div>
            </fieldset>
            <button class="makeJob" id="buttonApply">Применить</button>
        </div>
        <div class="wrapTable">
            <table class="table_products"></table>
        </div>
    </div>
</div>


<?php include __DIR__ . '/include/footer.php'; ?>