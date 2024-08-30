/**
 * Range Control
 *
 */

/**
 * Internal block libraries
 */
import { RangeControl as CoreRangeControl } from '@wordpress/components';

/**
 * Build the Measure controls
 * @returns {object} Measure settings.
 */
export default function RangeControl({
	label,
	onChange,
	value = '',
	className = '',
	step = 1,
	max = 100,
	min = 0,
	beforeIcon = '',
	help = '',
	unit = '',
	onUnit,
	showUnit = false,
	units = ['px', 'em', 'rem'],
}) {
	return [
		onChange && (
			<div className={`components-base-control kadence-range-control${className ? ' ' + className : ''}`}>
				{label && <label className="components-base-control__label">{label}</label>}
				<div className={'kadence-controls-content'}>
					<div className={'kadence-range-control-inner'}>
						<CoreRangeControl
							className={'kadence-range-control-range'}
							beforeIcon={beforeIcon}
							value={value}
							onChange={(newVal) => onChange(newVal)}
							min={min}
							max={max}
							step={step}
							help={help}
							allowReset={true}
						/>
					</div>
					{(onUnit || showUnit) && (
						<div className={'kadence-units kadence-measure-control-select-wrapper'}>
							<select
								className={'kadence-measure-control-select components-unit-control__select'}
								onChange={(event) => {
									if (onUnit) {
										onUnit(event.target.value);
									}
								}}
								value={unit}
								disabled={units.length === 1}
							>
								{units.map((option) => (
									<option value={option} selected={unit === option ? true : undefined} key={option}>
										{option}
									</option>
								))}
							</select>
						</div>
					)}
				</div>
			</div>
		),
	];
}
