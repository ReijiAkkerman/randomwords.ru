<?php
    $input_type = ($current_section === 'settings') ? 'radio' : 'checkbox';
    $name_type = ($current_section === 'settings') ? 'user' : 'user_';
    $user_number = ($current_section === 'settings') ? '' : 1;
?>
<p class="FormElements_parameterName">Пользователи</p>
<div class="FormElements-usersBlock">
    <div class="FormElements-usersBlock_user">
        <input class="FormElements-usersBlock_user__input" type="<?= $input_type ?>" name="user<?= $user_number ?>" value="Я" id="<?= $current_section ?>_Я" checked>
        <label class="FormElements-usersBlock_user__label" for="<?= $current_section ?>_Я">Я</label>
    </div>
    <div class="FormElements-usersBlock_user">
        <input class="FormElements-usersBlock_user__input" type="<?= $input_type ?>" name="user<?= $user_number ?>" value="Катя" id="<?= $current_section ?>_Катя">
        <label class="FormElements-usersBlock_user__label" for="<?= $current_section ?>_Катя">Катя</label>
    </div>
</div>
<?php if($current_section !== 'settings') $i++; ?>
<?php if($current_section === 'settings') { ?>
<div class="FormElements-usersBlock">
    <div class="FormElements-usersBlock_user">
        <input class="FormElements-usersBlock_user__input" type="radio" name="user" value="Новый" id="<?= $current_section ?>_Новый">
        <label class="FormElements-usersBlock_user__label" for="<?= $current_section ?>_Новый">Новый</label>
    </div>
</div>
<?php } ?>