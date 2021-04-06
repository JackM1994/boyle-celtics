<template>
	<form>
		<p class="field required">
			<label class="label required" for='name'>Full Name</label>
			<input class="text-input" type="text" name="name" id="name" required = 'true' placeholder="Full Name">
		</p>
		<p class="field required half">
			<label class="label required" for='email'>Email</label>
			<input class="text-input" type="email" name="email" id="email" required = 'true' placeholder="Email">
		</p>
		<p class="field required half">
			<label class="label required" for='phone'>Phone</label>
			<input class="text-input" type="phone" name="phone" id="phone" required = 'true' placeholder="Phone Number">
		</p>
		<p class="field required half">
			<label class="label required" for='emergency'>Emergency Name</label>
			<input class="text-input" type="text" name="emergency" id="emergency" required = 'true' placeholder="Emergency Name">
		</p>
		<p class="field required half">
			<label class="label required" for='emergency'>Emergency Phone</label>
			<input class="text-input" type="text" name="emergency-phone" id="e-phone" required = 'true' placeholder="Emergency Phone No.">
		</p>
		<div class="field">
			<label for='label' class="label">Age Group</label>
			<ul class="checkboxes">
				<li class="checkbox">
					<input type="checkbox" class="checkbox-input" id="choice" />
					<label class="checkbox-label" for="choice">u5-u10</label>
				</li>
				<li class="checkbox">
					<input type="checkbox" class="checkbox-input" id="choice" />
					<label class="checkbox-label" for="choice">u12-u14</label>
				</li>
				<li class="checkbox">
					<input type="checkbox" class="checkbox-input" id="choice" />
					<label class="checkbox-label" for="choice">u16-u18</label>
				</li>
				<li class="checkbox">
					<input type="checkbox" class="checkbox-input" id="choice" />
					<label class="checkbox-label" for="choice">Senior/Reserves</label>
				</li>
			</ul>
		</div>
	</form>
</template>
<style scoped>
	form{
		max-width: 40em;
		margin: 0 auto;
		position: relative;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		align-items: flex-end;
	}
	.field{
		width: 100%;
		margin: 0 0 1.5em 0;
	}
	.half{
		width: calc(50% - 1px);
	}
	.block,
	label,
	input,
	.error{
		padding: 0.75em 1em;
		appearance: none;
		outline: none;
		line-height: normal;
		border-radius: 0;
		border: none;
		display: block;
	}
	label{
		font-weight: bold;
		color: black;
		padding-top: 0;
		padding-left: 0;
		letter-spacing: 0.025em;
		font-size: 1.125em;
		line-height: 1.25;
		position: relative;
		z-index: 100;
	}
	.required:after{
		content: '\0020*';
		color: tomato;
		font-weight: normal;
		font-size: .75em;
		vertical-align: top;
	}
	input,
	.text-input,
	.checkbox-label{
		font: inherit;
		line-height: normal;
		width: 100%;
		box-sizing: border-box;
		background: #222222;
		color: white;
		position: relative;
	}
	input:placeholder{
		color: white;
	}
	input.required,
	input:not(:focus):not(:active),
	input .error,
	.error{
		background: rgba(#e6464c, .5), transparent;
	}
	.error{
		position: absolute;
		bottom: 0;
		right: 0;
		z-index: 100;
		font-size: .625em;
		color: #fff;
	}
	.checkboxes{
		padding: 0;
		margin: 0;
		list-style: none;
		overflow: hidden;
	}
	.checkbox{
		float: left;
		margin: 1px;
	}
	.checkbox-input{
		border: 0;
		clip: rect(0 0 0 0);
		height: 1px;
		margin: -1px;
		overflow: hidden;
		padding: 0;
		position: absolute;
		width: 1px;
	}
	.checkbox-label{
		display: inline-block;
		width: auto;
		color: #fff;
		position: relative;
		user-select: none;
		cursor: pointer;
	}
	.checkbox:focus{
		color: #4e4e4e;
	}
	li{
		list-style: none;
		padding: .75em 1em;
		background: #4e4e4e;
		color: #fff;
		margin: 5px;
		width: 25%;
	}

</style>



