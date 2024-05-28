async function filterUnits(data, filter) {
    var result = {
        total: 0,
        dataFiltered: []
    };

    // Aplicar filtro de exibir unidades fechadas se necessário
    if (filter.closeFilter) {
        result.dataFiltered = data.locations || [];
    } else {
        result.dataFiltered = (data.locations || []).filter(location => location.opened === true);
    }

    // Aplicar filtro de horário se necessário
    if (filter.timeFilter) {
        let filteredByTime = [];
        const timeFilter = filter.timeFilter.toUpperCase();

        result.dataFiltered.forEach(location => {
            let includeLocation = false;

            (location.schedules || []).forEach(schedule => {
                if (schedule.hour && schedule.hour.includes(' às ')) {
                    const [start, end] = schedule.hour.split(' às ');
                    const [startHour, startMin] = start.split('h').map(Number);
                    const [endHour, endMin] = end.split('h').map(Number);

                    let startTime = startHour + (startMin || 0) / 60;
                    let endTime = endHour + (endMin || 0) / 60;

                    if (timeFilter === 'M' && (startTime < 12 && endTime <= 12)) {
                        includeLocation = true;
                    } else if (timeFilter === 'T' && (startTime >= 12 && startTime < 18)) {
                        includeLocation = true;
                    } else if (timeFilter === 'N' && (startTime >= 18 || endTime > 18)) {
                        includeLocation = true;
                    }
                }
            });

            if (includeLocation) {
                filteredByTime.push(location);
            }
        });

        result.dataFiltered = filteredByTime;
    }

    result.total = result.dataFiltered.length;

    return result;
}

export default filterUnits;